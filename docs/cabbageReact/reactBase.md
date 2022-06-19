---
title: react基础
date: 2022/06/18
---

## react setState异步的问题

```jsx
function base () {
  const [name, setName] = useState('张三')
  setTimeout(() => {
    setName('李四') // 不会触发
    setName(() => '王五') // 会触发
  }, 1000)
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}
```

## react jsx部分调用时间函数的问题

- 直接调用setState会报错 需要使用()=> setState()

```jsx
function ReactBase ({ name, children }: IProps) {
  const [size, setSize] = useState(12)
  const [inputValue, setInputValue] = useState('')
  const [selectVal, setSelectVal] = useState('')
  const btnClick = () => {
    console.log(this)
    setSize(16)
  }
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(e.target.value)
  }
  return (
    <div>
      {/*<h1>{name && '老五'}</h1>*/}
      {/*{children ? children : '老六'}*/}
      <p style={{ fontSize: size }}>嘿嘿嘿</p>
      <p>
        <button onClick={btnClick}>点我</button>
        <button onClick={() => setSize(16)}>点我</button>
      </p>
      {/*{userList.map((item: string, index: number) => {*/}
      {/*  return <p key={index}>{item}</p>*/}
      {/*})}*/}
      <p>{inputValue}</p>
      <p><input type="text" onChange={inputChange}/></p>
      <p>{selectVal}</p>
      <p>
        <select onChange={selectChange}>
          {Array.from({ length: 10 }).map((item: any, index: number) => {
            return <option key={index}>{index}</option>
          })}
        </select>
      </p>
    </div>
  )
}
```

