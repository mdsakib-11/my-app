import Example from "./Example";
// const title = "Jhon Doe";
// const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia";
const date = new Date().getFullYear();
export default function Card(props){
const {textTitle, descText} = props;
  return  <div className='card'>
          <h2 className='title'>{textTitle}</h2>
          <p className='desc'>{descText}</p>
          <p className='date'>{date}</p>
          <Example/>
          </div>
          
}

