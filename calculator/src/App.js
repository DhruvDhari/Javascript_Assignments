// import logo from './logo.svg';
import './App.css';

function App() {

  const read=(a)=>{
    const element=document.getElementById('val');
    element.value+=a;
  }

  const del=()=>{
    const element=document.getElementById('val');
    element.value="";
  }

  const answer=()=>{
    const element=document.getElementById('val');
    element.value=eval(element.value);
  }
  return (
    <>
    <div className="container">
      <div className="calculator">
        
            {/* input waala area */}
      <div class="display input-group flex-nowrap">
     <input type="text" id='val' class="form-control" name='display'  aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>

      <div>
        <input  type="button" value="(" onClick={()=>{
          read('(')
        }} />
        <input type="button" value=")"  onClick={()=>{
          read(')')
        }}/>
        <input type="button" value="%" className='operator' onClick={()=>{
          read('%')
        }}/>
        <input type="button" value="CE" className='operator' onClick={del} />
      </div>
      <div>
        <input type="button" value="7" onClick={()=>{
          read('7')
        }}/>
        <input type="button" value="8" onClick={()=>{
          read('8')
        }}/>
        <input type="button" value="9" onClick={()=>{
          read('9')
        }} />
        <input type="button" value="/" className='operator' onClick={()=>{
          read('/')
        }} />
      </div>
      <div>
        <input type="button" value="4" onClick={()=>{
          read('4')
        }}/>
        <input type="button" value="5" onClick={()=>{
          read('5')
        }}/>
        <input type="button" value="6" onClick={()=>{
          read('6')
        }}/>
        <input type="button" value="*" className='operator' onClick={()=>{
          read('*')
        }}/>
      </div>
      <div>
        <input type="button" value="1" onClick={()=>{
          read('1')
        }}/>
        <input type="button" value="2" onClick={()=>{
          read('2')
        }}/>
        <input type="button" value="3" onClick={()=>{
          read('3')
        }}/>
        <input type="button" value="-" className='operator' onClick={()=>{
          read('-')
        }}/>
      </div>
      <div>
        <input type="button" value="0" onClick={()=>{
          read('0')
        }}/>
        <input type="button" value="."  onClick={()=>{
          read('.')
        }}/>
        <input type="button" value="=" className='operator' onClick={answer}/>
        <input type="button" value="+" className='operator' onClick={()=>{
          read('+')
        }}/>
      </div>

       
      

   

      </div>
  


    </div>
    </>
  );
}

export default App;
