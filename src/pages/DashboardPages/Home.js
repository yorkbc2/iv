import React, { Component } from "react";
import Dashboard from "./../Dashboard";
import { NewsList } from "./../../components/Lists/List";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [
                {
                    title: "У Вінниці проведуть конкурс сучасного візуального мистецтва імені Натана Альтмана",
                    image: "https://vinbazar.com/sites/default/files/imagecache/137x87/newfiles/2018-11/screenshot_6.jpg",
                    excerpt: "У листопаді проведуть конкурс сучасного візуального мистецтва імені Натана Альтмана. У заході візьмуть участь художники з різних міст України.  Про це йдеться в розпорядженні виконавчого комітету Вінницької міської ради."
                },
                {
                    title: 'У мікрорайоні "Академічний" відкрили новий торговий центр (Фото)',
                    image: "https://vinbazar.com/sites/default/files/imagecache/137x87/newfiles/2018-11/collage_photocat.jpg",
                    excerpt: '1 листопада відбулося урочисте відкриття торговельно-побутового комплексу «Барбара». Для мешканців району «Академічний» організували розіграші, подарунки, сюрпризи.'
                }
            ]
        }
    }
    render() {
        return (
        <Dashboard history={this.props.history}>
            <h1>Вітаємо у сервісі, <span className={"main-color"}>{this.props.user.name.first || "Ім'я"}.</span></h1>
            <NewsList items={this.state.news} />
        </Dashboard>
        )
    }
}

export default connect(state => ({user: state.user}))(Home);