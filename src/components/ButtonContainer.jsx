import design from "./ButtonContainer.module.css"

function Button({onBtnClick , btns}){
  
    return(<>
         <div className={design.keypad}>
            {btns.map((btn)=> <button 
                              className={`${design.button}`}
                              key={btn}
                              onClick={ ()=>( onBtnClick(btn))
                              }>
                                        {btn}
                              </button>)}

    </div>
    </>)
}

export default Button;