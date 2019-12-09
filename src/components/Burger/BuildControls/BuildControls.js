import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price: <strong> {props.price} </strong> BDT</p>
        {controls.map(ctrl => (
                <BuildControl
                    label={ctrl.label}
                    key={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemove(ctrl.type)}

                    // addIngredient={() => props.addIngredients(ctrl.type)}
                    // removeIngredient={() => props.removeIngredient(ctrl.type)}
                    // disabled={props[ctrl.type]}
                />
            )
        )}

        <button
            // disabled={!props.purchaseAble}
            className={classes.OrderButton}
            onClick={props.ordered}> ORDER NOW
        </button>
    </div>
);

export default buildControls;


// import React, {Component} from 'react';
// import classes from './BuildControls.css';
// import BuildControl from './BuildControl/BuildControl';
//
// const controls = [
//     {label: 'Salad', type: 'salad'},
//     {label: 'Bacon', type: 'bacon'},
//     {label: 'Cheese', type: 'cheese'},
//     {label: 'Meat', type: 'meat'},
//
// ];
//
// const buildControls = (props) => {
//     <div className={classes.BuildControls}>
//         {controls.map(ctrl =>{
//             <BuildControl key={ctrl.label} lable={ctrl.label}/>
//         })}
//     </div>
// };
//
// // class BuildControls extends Component {
// //     render() {
// //         return (
// //             <div className={classes.BuildControls}>
// //                 {/* eslint-disable-next-line array-callback-return,array-callback-return */}
// //                 {controls.map(ctrl => {
// //                     // eslint-disable-next-line no-unused-expressions
// //                     <BuildControl key={ctrl.label} lable={ctrl.label}/>
// //                 })}
// //             </div>
// //         );
// //     }
// // }
//
// // export default BuildControls;
// export default buildControls;
