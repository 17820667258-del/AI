import { Component } from 'react'
import { View, Text, Button, Input, ScrollView, Label } from '@tarojs/components'
import { loadData, saveData } from '../../utils/storage'
import { EMOJIS, COLORS, THEMES, Habit } from '../../utils/constants'
import './index.scss'

interface State {
  habits: Habit[]
  showModal: boolean
  editingId: number | null
  editName: string
  editEmoji: string
  editColor: string
}

export default class ManagePage extends Component<{}, State> {
  state: State = {
    habits: [],
    showModal: false,
    editingId: null,
    editName: '',
    editEmoji: EMOJIS[0],
    editColor: COLORS[0]
  }

  componentDidMount() { this.refresh() }
  componentDidShow() { this.refresh() }

  refresh() {
    const data = loadData()
    this.setState({ habits: data.habits })
  }

  openAdd() {
    this.setState({
      showModal: true, editingId: null,
      editName: '', editEmoji: EMOJIS[0], editColor: COLORS[0]
    })
  }

  openEdit(h: Habit) {
    this.setState({
      showModal: true, editingId: h.id,
      editName: h.name, editEmoji: h.emoji, editColor: h.color
    })
  }

  saveHabit() {
    const { editingId, editName, editEmoji, editColor, habits } = this.state
    if (!editName.trim()) { wx.showToast({ title: '请输入名称', icon: 'none' }); return }

    if (editingId) {
      const h = habits.find(x => x.id === editingId)
      if (h) { h.name = editName; h.emoji = editEmoji; h.color = editColor }
      wx.showToast({ title: '已更新', icon: 'none' })
    } else {
      habits.push({
        id: Date.now(),
        name: editName,
        emoji: editEmoji,
        color: editColor,
        checkins: {}
      })
      wx.showToast({ title: '已添加 🎉', icon: 'none' })
    }

    const theme = loadData().theme
    saveData({ habits, theme })
    this.setState({ habits: [...habits], showModal: false, editName: '' })
  }

  deleteHabit(id: number) {
    wx.showModal({
      title: '确认删除',
      content: '打卡记录也会一起删除，确定吗？',
      success: (res) => {
        if (res.confirm) {
          const habits = this.state.habits.filter(h => h.id !== id)
          const theme = loadData().theme
          saveData({ habits, theme })
          this.setState({ habits })
          wx.showToast({ title: '已删除', icon: 'none' })
        }
      }
    })
  }

  render() {
    const { habits, showModal, editName, editEmoji, editColor, editingId } = this.state

    return (
      <View className='app-page'>
        <View className='page-title'>💎 管理</View>

        <Button className='add-btn' onClick={() => this.openAdd()}>+ 添加新习惯</Button>

        {habits.length === 0 ? (
          <View className='empty-state'>
            <Text className='ei'>📋</Text>
            <Text>还没有习惯，点击上方添加吧</Text>
          </View>
        ) : (
          <ScrollView scrollY className='manage-list'>
            {habits.map(h => (
              <View key={h.id} className='m-item'>
                <Text className='mi'>{h.emoji}</Text>
                <Text className='mn'>{h.name}</Text>
                <View className='ma'>
                  <Button className='m-btn edit' onClick={() => this.openEdit(h)}>编辑</Button>
                  <Button className='m-btn del' onClick={() => this.deleteHabit(h.id)}>删除</Button>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        {showModal && (
          <View className='modal-overlay' onClick={() => this.setState({ showModal: false })}>
            <View className='modal-box' onClick={e => e.stopPropagation()}>
              <View className='modal-title'>{editingId ? '编辑习惯' : '添加习惯'}</View>
              <View className='modal-body'>
                <View className='fg'>
                  <Label className='fg-label'>习惯名称</Label>
                  <Input className='fg-input' value={editName}
                    placeholder='例如：晨跑30分钟' maxlength={30}
                    onInput={e => this.setState({ editName: e.detail.value })}
                  />
                </View>
                <View className='fg'>
                  <Label className='fg-label'>选择图标</Label>
                  <View className='emoji-grid'>
                    {EMOJIS.map(e => (
                      <View key={e}
                        className={`epi ${e === editEmoji ? 'sel' : ''}`}
                        onClick={() => this.setState({ editEmoji: e })}
                      ><Text>{e}</Text></View>
                    ))}
                  </View>
                </View>
                <View className='fg'>
                  <Label className='fg-label'>主题色</Label>
                  <View className='color-grid'>
                    {COLORS.map(c => (
                      <View key={c}
                        className={`cpi ${c === editColor ? 'sel' : ''}`}
                        style={`background: ${c}`}
                        onClick={() => this.setState({ editColor: c })}
                      ></View>
                    ))}
                  </View>
                </View>
                <View className='modal-actions'>
                  <Button className='btn-cancel' onClick={() => this.setState({ showModal: false })}>取消</Button>
                  <Button className='btn-confirm' onClick={() => this.saveHabit()}>保存</Button>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}
