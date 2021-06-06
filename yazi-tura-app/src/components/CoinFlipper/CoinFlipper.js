import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      counter: 0,
      paraTura:0,
      paraYazi:0
    };
  }

  handleClick = () => {
    // Counter State'i 1 arttır.
    this.setState({ counter: this.state.counter + 1});

    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    //Random Sayı Oluşturma
   const randomSayi = Math.floor(Math.random() * 2);

    //Random Sayının 0 veya 1 durumuna göre state güncelleme
    randomSayi === 0
   ? this.setState({ paraTura: this.state.paraTura + 1, side: "tura"})
   : this.setState({ paraYazi: this.state.paraYazi + 1, side: "yazi"});
   
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <strong> {this.state.paraTura} </strong>ü tura
          <strong> {this.state.paraYazi}  </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
