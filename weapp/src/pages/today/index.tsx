import { Component } from 'react'
import { View, Text, Button, ScrollView } from '@tarojs/components'
import { Habit } from '../../utils/constants'
import { loadData, saveData, todayStr } from '../../utils/storage'
import './index.scss'

interface State {
  habits: Habit[]
  currentDate: string
}

export default class TodayPage extends Component<{}, State> {
  state: State = {
    habits: [],
    currentDate: todayStr()
  }

  componentDidMount() { this.loadHabits() }
  componentDidShow() { this.loadHabits() }

  loadHabits() {
    const data = loadData()
    this.setState({ habits: data.habits, currentDate: todayStr() })
  }

  toggleCheckin(id: number) {
    const { habits } = this.state
    const h = habits.find(x => x.id === id)
    if (!h) return

    const td = todayStr()
    if (!h.checkins) h.checkins = {}

    if (h.checkins[td]) {
      delete h.checkins[td]
      wx.showToast({ title: '已取消', icon: 'none', duration: 1200 })
    } else {
      h.checkins[td] = true
      wx.showToast({ title: '打卡成功 🎉', icon: 'none', duration: 1200 })
    }

    saveData({ habits, theme: loadData().theme })
    this.setState({ habits: [...habits] })
  }

  render() {
    const { habits, currentDate } = this.state
    const now = new Date()
    const weekday = ['日','一','二','三','四','五','六'][now.getDay()]
    const dateStr = `${now.getMonth()+1}月${now.getDate()}日 周${weekday}`

    return (
      <View className='app-page'>
        <View className='page-title'>✨ 今日打卡</View>
        <View className='tag-badge'>{dateStr}</View>

        {habits.length === 0 ? (
          <View className='empty-state'>
            <Text className='ei'>🌸</Text>
            <Text>还没有习惯呢～{'\n'}来创建你的第一个习惯吧！</Text>
            <Button className='btn-primary' onClick={() => {
              wx.switchTab({ url: '/pages/manage/index' })
            }}>+ 开始创建</Button>
          </View>
        ) : (
          <ScrollView scrollY className='habits-list'>
            {habits.map(h => {
              const checked = !!(h.checkins && h.checkins[currentDate])
              return (
                <View
                  key={h.id}
                  className='habit-row'
                  style={`--c-acc: ${h.color};`}
                >
                  <Text className='emoji'>{h.emoji}</Text>
                  <View className='info'>
                    <Text className='name'>{h.name}</Text>
                    <View className='meta'>
                      <Text className={`meta-tag ${checked ? 'done' : 'pend'}`}>
                        {checked ? '✓ 已完成' : '⏳ 待完成'}
                      </Text>
                    </View>
                  </View>
                  <View
                    className={`check-btn ${checked ? 'checked' : ''}`}
                    onClick={() => this.toggleCheckin(h.id)}
                  >
                    {checked ? '✓' : ''}
                  </View>
                </View>
              )
            })}
          </ScrollView>
        )}
      </View>
    )
  }
}
