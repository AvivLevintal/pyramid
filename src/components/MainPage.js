import React from 'react'
import bg_grid from '../imgs/bg-grid.svg'
import '../MainPage.css'
import pyramid from '../imgs/pyramid-1.svg'
import rectangle from '../imgs/Rectangle.png'
const MainPage = () => {
    return (
        <body className="screen-main">




            <label className="definitely-not-label">
                DefinitelyNotA<br />
                PyramidScheme
            </label>



            <table>
                        {/* <h3 className="leaderboard">LeaderBoard</h3> */}
                <tr>
                    <th>Leaderboard</th>
                    <th></th>
                </tr>
                <tr>
                    <td>elonmusk</td>
                    <td>73012</td>
                </tr>
                <tr>
                    <td>goatlover</td>
                    <td>67311</td>
                </tr>
                <tr>
                    <td>freebrittany</td>
                    <td>52088</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>7102 players</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>yousuck420</td>
                    <td>5921</td>
                </tr>
            </table>

            {/* <label className="at-least-label">
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
            </label> */}
            {/* <label className="elonmusk">
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
            </label> */}
            <div className="button-container">
                <input type="button" className="shop" value="-> shop"/>
                <input type="button" className="invite" value="-> invite"/>
                <input type="button" className="pressit" value="-> press it"/>
                <input type="button" className="wtf" value="wtf is this?"/>
            {/* <img src="rectangle" className="rectangle-input"/> */}
            </div>



            <div className="pyramid">
                <img src={pyramid} className="" />
            </div>

            <div className="countdown">
                <p>12d 7h 57m 48s</p>
            </div>
            {/* <img src={bg_grid} className="bg-grid" /> */}
        </body>
    )
}

export default MainPage
