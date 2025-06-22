import Card from '../node_modules/@mui/material/Card';
import CardContent from '../node_modules/@mui/material/CardContent';
import CardMedia from '../node_modules/@mui/material/CardMedia';
import CardActionArea from '../node_modules/@mui/material/CardActionArea';
import Image1 from "./assets/img1.jpeg";
import "./RecipePage.css"

export default function RecipePage() {
    return <>
        <div className='card-container'>
            <Card className='card' sx={{ maxWidth: 695, Height: 900, borderRadius: 4 }}>
                <CardActionArea>
                    <div className="Img">
                        <CardMedia
                            component="img"
                            height="250"
                            image={Image1}
                            alt="green iguana"
                            sx={{ borderRadius: 2 }}
                        />

                    </div>
                    <CardContent>

                        <div className='inner-container'>
                            <div className='header'>
                                <p className='header-heading margin'> Simple Omelette Recipe </p>

                                <p className='small-para margin'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                                    to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                            </div>
                            <div className='preparation-time'>

                                <span className='margin' style={{ color: "hsl(332, 51%, 32%)", fontWeight: "bolder", fontSize: "1rem", }}>Preparation time
                                </span>
                                <p className='small-para margin'>
                                    <ul>
                                        <li> <b> Total</b>: Approximately 10 minutes</li>
                                        <br />
                                        <li>  <b> Preparation</b>: 5 minutes</li>
                                        <br />
                                        <li>  <b> Cooking</b>: 5 minutes</li>
                                    </ul>
                                </p>
                            </div>

                            <div className='ingredients'>
                                <p className='main-headings'>  Ingredients</p>
                                <p className='small-para margin'>
                                    <ul>

                                        <li>2-3 large eggs </li >
                                        <li>Salt, to taste</li>
                                        <li> Pepper, to taste</li>
                                        <li> 1 tablespoon of butter or oil</li>
                                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                                    </ul>

                                </p>

                            </div>
                            <br />
                            <hr />
                            <div className="instructions">
                                <p className='main-headings'>Instructions</p>
                                <p className="small-para margin">
                                    <ol>
                                        <li>  <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                                            You can add a tablespoon of water or milk for a fluffier texture.
                                        </li>

                                        <li>
                                            <b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.
                                        </li>
                                        <li>

                                            <b> Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                                            the eggs evenly coat the surface.
                                        </li>
                                        <li>

                                            <b> Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the
                                            middle, sprinkle your chosen fillings over one half of the omelette.
                                        </li>
                                        <li>

                                            <b> Fold and serve</b> : As the omelette continues to cook, carefully lift one edge and fold it over the
                                            fillings. Let it cook for another minute, then slide it onto a plate.

                                        </li>
                                        <li>

                                            <b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.
                                        </li>
                                    </ol>

                                </p>
                            </div>
                            <br />
                            <hr />

                            <div className="nutrition margin" >
                                <p className="main-headings">Nutrition</p>
                                <p className="small-para">
                                    The table below shows nutritional values per serving without the additional fillings.
                                </p>
                                <table className="nutrition-table">
                                    <tbody>
                                        <tr>
                                            <td>Calories</td>
                                            <td><strong>277kcal</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Carbs</td>
                                            <td><strong>0g</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Protein</td>
                                            <td><strong>20g</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Fat</td>
                                            <td><strong>22g</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    </>
}