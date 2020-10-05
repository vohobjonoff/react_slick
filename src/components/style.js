import styled from 'styled-components';



export const CorouselWrapper = styled.div`
max-width:800px;
width:100%;
display:block;
margin:auto;

@media (max-width: 1024px) {
    max-width:750px;

    & .slick-prev:before, .slick-next:before{
       color:orange;
    }
}
@media (max-width: 900px) {
    max-width:650px;
    
}

@media (max-width: 767px) {
    max-width:550px;
   
}

@media (max-width: 600px) {
    max-width:500px;
   

@media (max-width: 500px) {
  max-width:350px;
   
}

}


`;

export const Wrapper = styled.div`
width: 20px;
color: #fff;
font-size: 8px;
border-radius: 50%;
margin-left: 50px;
text-align:center;
@media (max-width: 350px) {
  img{
    width:20px;
  }
} 

img {
    border-radius: 50%;
    height: 20px;
    margin-right: 50px;
    &:hover {
        opacity: 0.5;
    }
   
}

`;