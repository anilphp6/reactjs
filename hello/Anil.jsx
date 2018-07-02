import React from 'react';

class Anil extends React.Component {
   render() {
      var myStyle = {
         fontSize: 100,
         color: '#FF0000',
		 anil:12
      }
      return (
         <div>
		 {myStyle.fontSize}
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}
export default Anil;