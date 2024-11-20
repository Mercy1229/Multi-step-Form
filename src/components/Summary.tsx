import Image from '../assets/images/icon-thank-you.svg'
function Summary(){
    return(
        <div className='pe-2 my-32'>
          <img src={Image} className='mx-auto'/>
            <h1 className='text-MarineBlue font-ubuntu font-bold text-3xl text-center py-5'>Thank You!</h1 >
            <p className='text-center text-md text-gray-400 font-ubuntu text-pretty'>Thanks for confirming your subscription! 
              we hope you have fun using our platform. If you ever need support please feel free to email us at support@loremgaming.com.</p>     
        </div>
    )
}
export default Summary;