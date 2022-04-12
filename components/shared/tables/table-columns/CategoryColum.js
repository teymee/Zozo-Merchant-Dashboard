import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';


const CategoryColumn = ({category, id}) => {

      return (
            <tr>
                <td>{id}</td>
                <td>
                    <strong>{category.name}</strong>
                </td>
                <td>{category.description}</td>
                <td>{category.createdAt}</td>
                {/* <td>{category.orders}</td> */}
                {/* <td>{badgeView}</td> */}
                <td>
                    <DropdownAction/>
                </td>
            </tr>
        );
 
//     const tableItemsView = customers.map((category, index) => {
//         let badgeView;

//         if (category.status) {
//             badgeView = <span className="ps-badge success">active</span>;
//         } else {
//             badgeView = <span className="ps-badge gray">deactive</span>;
//         }

//         return (
//             <tr key={index}>
//                 <td>{index}</td>
//                 <td>
//                     <strong>{category.name}</strong>
//                 </td>
//                 <td>{category.phone}</td>
//                 <td>{category.balance}</td>
//                 <td>{category.orders}</td>
//                 <td>{badgeView}</td>
//                 <td>
//                     <DropdownAction/>
//                 </td>
//             </tr>
//         );
//     });

};

export default CategoryColumn;
