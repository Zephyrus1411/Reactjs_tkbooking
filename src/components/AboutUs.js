import "../static/Comment.css"
import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { IoIosPaperPlane } from "react-icons/io";
import { Button, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import Api, { authApi, authAxios, endpoints } from "../configs/Api";
import cookies from 'react-cookies'
import { UserContext } from "../App";


function AboutUs(props) {
    const [ratingClick, setRatingClick] = useState()
    const [ratingHover, setRatingHover] = useState()
    const [comments, setComments] = useState([])
    const [content, setContent] = useState()
    const [user, dispatch] = useContext(UserContext)
    const [routes, setRoutes] = useState([])
    const [routesCmt, setRoutesCmt] = useState()

    const addComment = async (event) => {
        event.preventDefault()
        console.log(user)

        const resComment = await Api.post("/comments/", {
            'content': content,
            'routes': routesCmt,
            'user': user.id,
        })
        setComments([...comments, resComment.data])
        console.log(resComment.data)
        setRoutesCmt('')
        setContent('')
        setRatingClick(0)

    }

    useEffect(() => {
        const loadRoutes = async () => {
            const res = await Api.get(`${endpoints['routes']}`)
            setRoutes(res.data)
            console.info(res.data)
        }
        loadRoutes()
        const loadComments = async () => {
            const res = await Api.get(endpoints['get-comments'])
            setComments(res.data)
            console.info(res.data)
        }

        loadComments()
    }, [])


    const RatingList = (list) => {
        console.log(list)
        switch (list) {
            case 1:
                return <div className="material-icons-wrapper md-16"><AiFillStar /></div>
            case 2:
                return <><div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div></>
            case 3:
                return <><div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div></>
            case 4:
                return <><div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div></>
            case 5:
                return <><div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div>
                    <div className="material-icons-wrapper md-16"><AiFillStar /></div></>
        }
    }

    return (
        <div style={{
            margin: "10px auto",
            width: "80%",
            borderRadius: "16px",
            boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
            padding: "24px",
        }}>
            <h1>????NH GI?? V??? CHUY???N ??I</h1>
            {/* Cho nay comment nehhhhhh */}
            <div id="moduleComment" data-pagetype="1" data-productid="33485" className="block-comment" style={{ display: "block" }}>
                <div className="block-comment__box-title">
                    <p id="total_comment" className="totalcomment" style={{ color: "red" }}>????nh gi?? chuy???n ??i</p>
                </div>
                <Form.Select aria-label="Default select example" value={routesCmt} onChange={e => setRoutesCmt(e.target.value)} style={{ width: "200px", padding: "5px", borderRadius: "10px", margin: "24px 0" }}>
                    <option value='' >Ch???n chuy???n ??i :</option>
                    {routes.map(c => {
                        return <option value={c.id}>{c.begining}-{c.destination}</option>
                    })}
                </Form.Select>
                <div className="rating-comment">
                    <div className={`${ratingClick >= 1 || ratingHover >= 1 ? "star-comment-selected" : "star-comment"}`} onMouseOver={() => { setRatingHover(1); }} onMouseOut={() => { setRatingHover(0) }} onClick={() => { setRatingClick(1); }}>
                        <AiFillStar />
                    </div>
                    <div className={`${ratingClick >= 2 || ratingHover >= 2 ? "star-comment-selected" : "star-comment"}`} onMouseOver={() => { setRatingHover(2); }} onMouseOut={() => { setRatingHover(0) }} onClick={() => { setRatingClick(2); }}>
                        <AiFillStar />
                    </div>
                    <div className={`${ratingClick >= 3 || ratingHover >= 3 ? "star-comment-selected" : "star-comment"}`} onMouseOver={() => { setRatingHover(3); }} onMouseOut={() => { setRatingHover(0) }} onClick={() => { setRatingClick(3); }}>
                        <AiFillStar />
                    </div>
                    <div className={`${ratingClick >= 4 || ratingHover >= 4 ? "star-comment-selected" : "star-comment"}`} onMouseOver={() => { setRatingHover(4); }} onMouseOut={() => { setRatingHover(0) }} onClick={() => { setRatingClick(4); }}>
                        <AiFillStar />
                    </div>
                    <div className={`${ratingClick == 5 || ratingHover == 5 ? "star-comment-selected" : "star-comment"}`} onMouseOver={() => { setRatingHover(5); }} onMouseOut={() => { setRatingHover(0) }} onClick={() => { setRatingClick(5); }}>
                        <AiFillStar />
                    </div>
                </div>

                <div className="block-comment__box-form-comment form-add">
                    <textarea id="review_field" name="detail" rows="4" cols="5" placeholder="Xin m???i ????? l???i tr???i nghi???m v?? ????nh gi?? c???a b???n v??? chuy???n ??i, ch??ng t??i lu??n c??? g???ng h???t s???c ????? c???i thi???n ch???t l?????ng d???ch v??? theo nhu c???u c???a b???n" className="cps-textarea" value={content} onChange={(evt) => setContent(evt.target.value)}></textarea>
                    <Button className="btn-send-cmt" onClick={addComment}>

                        <IoIosPaperPlane />&nbsp;G???i
                    </Button>
                    <span id="sub-comment-error" className="comment-error error-text error d-none">Vui l??ng nh???p b??nh lu???n</span>
                </div>
            </div>
            {/* Cho nay la hien comment */}
            {comments.map(c => {
                console.log(c.id)
                return (
                    <div className="items">
                        <div className="ixChPW review-item-container ">
                            <div className="review-item">
                                <div className="review-section header">
                                    <img className="review-avatar lazyloaded" src={c.user.avatar} alt="review-avatar" width="40" height="40" />
                                    <div className="review-title">
                                        <p className="gbHaVL name color--darkness">{c.user.first_name} {c.user.last_name}</p>
                                    </div>
                                </div>
                                <div className="review-section body">
                                    <p className="base__Body02-sc-1tvbuqk-16 ewOEQO comment color--dark" style={{ textAlign: "left" }}>{c.content}</p>
                                </div>
                                <div className="review-section footer" style={{ marginTop: "0" }}>
                                    <p className="base__Caption-sc-1tvbuqk-18 gJvXJw rated-date color--light-disable">????ng ng??y {c.created_date}</p>
                                    <div className="material-icons-wrapper md-16">
                                        <GoVerified className="color--positive" />
                                        <p className="gJvXJw color--positive">???? mua v??</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutUs