import React from 'react'

const BoardIndex = () => {
  return (
    <div className='p-24'>
      <h1 className='text-3xl font-bold'>Board</h1>

      <BoardList />
      <list />
    </div>
  )
}

export const BoardList = () => {
  return (
    <div className='mt-6 w-full flex flex-row justify-between'>
      <div className='max-w-[30%]'>
      <BoardItem />

      </div>

    </div>
  )
}

export const BoardItem = () => {
  return (
    <div className='relative'>
          <div style={{width: '100%', height: '100%', padding: 16, background: 'white', boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.04)', borderRadius: 16, border: '3px #F0F0F0 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
<img style={{alignSelf: 'stretch', flex: '1 1 0', borderRadius: 8}} src="https://via.placeholder.com/357x224" />
<div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
<div style={{flex: '1 1 0', height: 32, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
<div style={{padding: 4, background: '#FA3C6A', borderRadius: 5, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
<div style={{width: 24, height: 24, position: 'relative'}}>
<div style={{width: 20.90, height: 18.23, left: 1.55, top: 3, position: 'absolute', background: 'white', border: '2px white solid'}}></div>
<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
</div>
</div>
<div style={{color: '#161616', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 19.50, wordWrap: 'break-word'}}>1k Likes</div>
</div>
<div style={{flex: '1 1 0', height: 32, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
<div style={{padding: 4, background: '#F0F0F0', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
<div style={{width: 24, height: 24, position: 'relative'}}>
<div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2px #161616 solid'}}></div>
<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
</div>
</div>
<div style={{color: '#161616', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 19.50, wordWrap: 'break-word'}}>11 Comments</div>
</div>
<div style={{flex: '1 1 0', height: 32, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
<div style={{padding: 4, background: '#F0F0F0', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
<div style={{width: 24, height: 24, position: 'relative'}}>
<div style={{width: 4, height: 8, left: 17, top: 1, position: 'absolute', border: '2px #161616 solid'}}></div>
<div style={{width: 18, height: 6, left: 3, top: 5, position: 'absolute', border: '2px #161616 solid'}}></div>
<div style={{width: 4, height: 8, left: 3, top: 15, position: 'absolute', border: '2px #161616 solid'}}></div>
<div style={{width: 18, height: 6, left: 3, top: 13, position: 'absolute', border: '2px #161616 solid'}}></div>
<div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
</div>
</div>
<div style={{color: '#161616', fontSize: 13, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 19.50, wordWrap: 'break-word'}}>2 Shares</div>
</div>
</div>
</div>

    </div>


  )
}

export default BoardIndex