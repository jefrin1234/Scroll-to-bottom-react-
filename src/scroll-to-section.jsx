import React, { useRef } from 'react'

function ScrollToSection() {

  
  const ref = useRef()

  const data = [
    {
      label : 'First Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'red'
     }
    },
    {
      label : 'Second Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'orange'
     }
    },
    {
      label : 'Third Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'gray'
      
     }
    },
    {
      label : 'Fourth Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'blue'
     }
    },
    {
      label : 'Fifth Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'green'
     }
    },
    {
      label : 'Sixth Card',
     style : {
      width : '100%',
      height : '600px',
      background : 'yellow'
     }
    },
  ]


  function handleScrollToSection(){
    let position = ref.current.getBoundingClientRect().top
    window.scrollTo({
      top:position,
      behavior:'smooth'
    })
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection} style={{padding:'10px 25px',color:'orange' , fontWeight:'900',border:'2px solid gray',borderRadius:'3px',background:'red',cursor:'pointer'}}>Click To Scroll</button>
      {
        data.map( (item,index)=> <div ref={index === 3 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div> )
      }
    </div>
  )
}

export default ScrollToSection
