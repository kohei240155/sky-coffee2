import Image from "next/image";
import React from "react";

const Blog = () => (
  <section className="blog">
    <div className="container">
      <h2 className="heading">blog<span className="subtitle">ブログ</span></h2>
      <div className="list">
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail01.jpg"
                alt="青いトラック"
                width={700}
                height={357}
              />
            </div>
            <div className="title">コーヒーカー始めました。</div>
            <div className="date">2030.08.06</div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail02.jpg"
                alt="牛乳"
                width={700}
                height={357}
              />
            </div>
            <div className="title">濃厚クリーミーなミルクをどうぞ</div>
            <div className="date">2030.08.05</div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail03.jpg"
                alt="音楽アプリ"
                width={700}
                height={357}
              />
            </div>
            <div className="title">
              Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。
            </div>
            <div className="date">2030.08.04</div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail04.jpg"
                alt="山々"
                width={700}
                height={357}
              />
            </div>
            <div className="title">ハイキング用のコーヒーを販売中です。</div>
            <div className="date">2030.08.03</div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail05.jpg"
                alt="青とピンクのグラデーション"
                width={700}
                height={357}
              />
            </div>
            <div className="title">ショップの壁を塗ってみました。</div>
            <div className="date">2030.08.02</div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="img">
              <Image
                src="/images/thumbnail06.jpg"
                alt="コーヒーと手帳"
                width={700}
                height={357}
              />
            </div>
            <div className="title">ブログをはじめました。</div>
            <div className="date">2030.08.01</div>
          </a>
        </div>
        <a href="#" className="btn">ブログ一覧</a>
      </div>
    </div>
  </section>
);

export default Blog;
