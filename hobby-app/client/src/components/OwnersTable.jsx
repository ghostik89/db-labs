import React from "react";

export const OwnersTable = () => {
    return(
        <table>
            <thead>
            <tr>
                <th>Имя продавца</th>
                <th>Количество товара</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
            </tr>
            <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
            </tr>
            </tbody>
        </table>
    )
}