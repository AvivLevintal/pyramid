import React from 'react'
import bg_grid from '../imgs/bg-grid.svg'
import '../MainPage.css'
import pyramid from '../imgs/pyramid.svg'
import rectangle from '../imgs/Rectangle.png'
const MainPage = () => {
    return (
        <body className="screen-main">



            <label className="definitely-not-label">
                DefinitelyNotA
                PyramidScheme
            </label>
            <label className="definitely-not-label">
                ™
            </label>


            <input type="button" className="shop" value="-> shop"/>
            <input type="button" className="invite" value="-> invite"/>
            <input type="button" className="pressit" value="-> press it"/>
            <input type="button" className="wtf" value="wtf is this?"/>
            <img src="rectangle" className="rectangle-input"/>



                <table>
                    <h3 className="leaderboard">LeaderBoard</h3>
            <tr>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>elonmusk</td>
                <td>goatlover</td>
                <td>freebrittany</td>
                <td>xxxx players</td>
                <td>yousuck420</td>
                <td>1000 players</td>
            </tr>
            <tr>
                <td>73012</td>
                <td>67311</td>
                <td>52088</td>
                <td>...</td>
                <td>7102</td>
                <td>...</td>
            </tr>
                </table>

            <label className="at-least-label">
                at least you
                got a prize…
            </label>
            <label className="also-a-cool-label">
                also a
                cool prize!
            </label>
            <label className="super-crazy-label">
                super crazy
                amazing prize!!
            </label>
            <label className="elonmusk">
                elonmusk
            </label>
            <label className="goatlover">
                goatlover
            </label>
            <label className="freebrittany">
                freebrittany
            </label>
            <label className="yousuck420">
                yousuck420
            </label>
            <img src={pyramid} className="pyramid" />
            <img src={bg_grid} className="bg-grid" />
        </body>
    )
}

export default MainPage
