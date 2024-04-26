import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-16 px-2">
          <h1 className="text-6xl font-NotoSans">
            <span>
                {/* <Image
              height={45}
              width={60}
              src="/assets/front/image/homepage/logo.png"
              className=""
              alt="Tips"
            /> */}
            XXXX
            </span>
            <span>なら、</span>
            <strong>無料</strong>
            <span>ですぐに</span>
            <br/>
            <strong>記事</strong>
            <span>の</span>
            <strong>販売</strong>
            <span>をはじめることができます</span>
          </h1>
          <div className="card-deck">
            <div className="card">
              <div className="card-header grd-primary">
                <h2>システム使用料</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>FREE</strong>無料
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header grd-primary">
                <h2>販売手数料</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>14</strong>%
                  <span className="d-block text-center">※決済手数料込み</span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header grd-primary">
                <h2>売上支払日</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  出金申請日から最短<strong>10</strong>
                  <span>営業日後</span>
                  <span className="d-block text-center">
                    ※営業日とは、土日祝日を除いた平日の稼働日のことを指します
                  </span>
                </p>
              </div>
            </div>
          </div>
          <span className="illust mainvisual">
            <Image
              height={50}
              width={50}
              className="ovj ovj-contain"
              src="/assets/front/Image/landing/main_illustration.svg"
              alt="Tipsなら、無料ですぐに記事の販売をはじめることができます"
            />
          </span>
        </div>
      </section>
      <section className="landing-section step">
        <div className="container-lg">
          <h2>
            かんたん<span>3ステップ</span>でスタート！
          </h2>
          <ol className="list-unstyled d-flex flex-wrap">
            <li>
              <span>
                1<small>mim</small>
              </span>
              <h3>
                <span>ユーザー登録</span>をしよう！
              </h3>
              <p>
                まずはニックネーム・メールアドレス・パスワードを登録しましょう。
              </p>
              <a
                href="https://tips.jp/register"
                className="btn btn-primary grd-primary btn-lg btn-pill btn-block"
              >
                無料で会員登録する<i className="ic ic-down"></i>
              </a>
              <div>
                <Image
                  height={50}
                  width={50}
                  src="/assets/front/Image/landing/girl02.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <span>
                2<small>mim</small>
              </span>
              <h3>
                <span>プロフィール登録</span>をしよう！
              </h3>
              <p>プロフィール画像と自己紹介を登録しましょう。</p>
              <div>
                <Image
                  height={50}
                  width={50}
                  src="/assets/front/Image/landing/profile.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <h3>
                記事を書いて<span>公開</span>しよう！
              </h3>
              <ol className="list-unstyled d-flex flex-column flex-lg-row">
                <li>
                  <div>
                    <Image
                      height={50}
                      width={50}
                      src="/assets/front/Image/landing/article.svg"
                      alt="記事を作成"
                    />
                  </div>
                  <h4>記事を作成</h4>
                  <p>好きな記事を書きましょう。</p>
                </li>
                <li>
                  <div>
                    <Image
                      height={50}
                      width={50}
                      src="/assets/front/Image/landing/setting.svg"
                      alt="公開設定"
                    />
                  </div>
                  <h4>公開設定</h4>
                  <p>
                    無料記事か有料記事を選択しましょう。
                    有料を選択すると、自分で価格を付けて販売することができます。
                  </p>
                </li>
                <li>
                  <div>
                    <Image
                      height={50}
                      width={50}
                      src="/assets/front/Image/landing/release.svg"
                      alt="公開！"
                    />
                  </div>
                  <h4>公開！</h4>
                  <p>
                    公開設定が済んだらいよいよ公開です！
                    たくさんの人に読んでもらえると良いですね！
                  </p>
                </li>
              </ol>
              <div>
                <Image
                  height={50}
                  width={50}
                  src="/assets/front/Image/landing/boy02.svg"
                  alt=""
                />
              </div>
              <a
                href="https://tips.jp/search"
                className="btn btn-secondary btn-block mt-5 ml-auto mr-auto"
              >
                投稿された記事を見てみる<i className="ic ic-down"></i>
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="landing-section payment">
        <div className="container-lg">
          <h2>売上代金のお支払い</h2>
          <div className="d-flex flex-column flex-lg-row">
            <div className="card card-body">
              <h3>販売手数料</h3>
              <span className="badge badge-secondary badge-pill">
                売上代金の
              </span>
              <p className="card-text">
                <strong>14</strong>%
                <span className="d-block text-center">※決済手数料込み</span>
              </p>
            </div>
            <div className="card card-body">
              <h3>振込手数料</h3>
              <span className="badge badge-secondary badge-pill">
                1申請毎に
              </span>
              <p className="card-text">
                <strong>330</strong>円～<span>(税込)</span>
              </p>
            </div>
            <div className="card card-body">
              <h3>売上代金の支払日</h3>
              <span className="badge badge-secondary badge-pill arrow-center">
                出金申請日から最短
              </span>
              <p className="card-text">
                <strong>10</strong>営業日後
                <span className="text-center">
                  ※出金申請は5,000円以上から可能
                </span>
                <span className="text-center">
                  ※営業日とは、土日祝日を除いた平日の稼働日のことを指します
                </span>
              </p>
            </div>
          </div>
          <p className="mt-4 mb-0 text-center">
            <small>
              ※初回の出金申請時のみ、通常会員・プラス会員に関わらず、売上代金の支払日は出金申請日から20営業日後（土日祝日を除く）となります。
            </small>
          </p>
        </div>
      </section>
      <section className="landing-section service" id="service">
        <div className="container-lg">
          <span className="first-letter">SERVICE</span>
          <div className="dog">
            <Image
              height={50}
              width={50}
              src="/assets/front/Image/landing/dog.svg"
              alt=""
            />
          </div>
          <div className="boy">
            <Image
              height={50}
              width={50}
              src="/assets/front/Image/landing/boy01.svg"
              alt=""
            />
          </div>
          <p>
            <span>便利な機能</span>が充実！
          </p>
          <div className="d-flex flex-column flex-lg-row flex-wrap">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/point.svg"
                    className="card-Image"
                    alt="ポイントが貯まる・使える"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>ポイント機能</h3>
                    <p className="card-text">
                      買うたびにポイントが貯まり、1ポイント=1円で利用できます。(1,000ポイント以上でAmazonギフト券と交換可)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/questionnaire.svg"
                    className="card-Image"
                    alt="購入時アンケートの設定"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>アンケートの設置</h3>
                    <p className="card-text">
                      用意してあるアンケートから、購入者に聞きたいことを任意に設定することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/chat.svg"
                    className="card-Image"
                    alt="チャット機能"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>チャット機能</h3>
                    <p className="card-text">
                      メールアドレスを公開することなく、Tips内でライターと購入者間の連絡が可能。購入者同士で交流ができるグループチャット機能もお使いいただけます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/pdf.svg"
                    className="card-Image"
                    alt="PDFダウンロードが可能"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>PDF自動作成</h3>
                    <p className="card-text">
                      購入した記事はPDF形式でダウンロードできます。PDFは自動作成されます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/coupon.svg"
                    className="card-Image"
                    alt="クーポンの発行が可能"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>クーポンの発行が可能</h3>
                    <p className="card-text">
                      記事ごとにクーポンを発行することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/period.svg"
                    className="card-Image"
                    alt="販売期間の設定"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>販売期間の設定</h3>
                    <p className="card-text">
                      販売期間を設定することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/present.svg"
                    className="card-Image"
                    alt="プレゼントリンク"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>プレゼントリンク</h3>
                    <p className="card-text">
                      有料記事を無料で見ることができるURLを生成します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/url.svg"
                    className="card-Image"
                    alt="カスタムURL"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>カスタムURL</h3>
                    <p className="card-text">
                      記事のURLを好きな文字列に変更することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/seo.svg"
                    className="card-Image"
                    alt="SEO設定"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>SEO設定</h3>
                    <p className="card-text">
                      検索結果用のタイトル・ディスクリプション(説明文)を設定することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/sales.svg"
                    className="card-Image"
                    alt="売上管理"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>アクセス状況の確認</h3>
                    <p className="card-text">
                      PV数やユーザー数を見ることができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/set.svg"
                    className="card-Image"
                    alt="記事のセット販売"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>記事のセット販売</h3>
                    <p className="card-text">
                      無料・有料の記事をまとめて、セット販売することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/mintyou.svg"
                    className="card-Image"
                    alt="記事のフォントを明朝体に変更"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>記事のフォントを明朝体に変更</h3>
                    <p className="card-text">
                      記事のフォント表示を明朝体に変更できます。
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tips.tayori.com/q/tips-helpcenter/detail/183409"
                      >
                        サンプル
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/bgselect.svg"
                    className="card-Image"
                    alt="記事の背景を変更"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>記事の背景を変更</h3>
                    <p className="card-text">
                      記事の背景を変更できます。
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tips.tayori.com/q/tips-helpcenter/detail/183408"
                      >
                        サンプル
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/fileupload.svg"
                    className="card-Image"
                    alt="ファイルアップロード"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>ファイルアップロード</h3>
                    <p className="card-text">
                      ファイルをアップロードして、記事に添付できます。(1ファイルにつき通常会員10MB/プラス会員100MBまで)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/tips-affiliate.svg"
                    className="card-Image"
                    alt="アフィリエイト"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>紹介報酬(アフィリエイト)機能</h3>
                    <p className="card-text">
                      紹介報酬(アフィリエイト)機能付きなので、記事の拡散力が強くなります。報酬率は販売価格の5～50%から選択可能です。
                      <a href="https://tips.jp/affiliate">
                        紹介報酬(アフィリエイト)とは？
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://tips.jp/register"
            className="btn btn-primary grd-primary btn-lg btn-pill btn-block"
          >
            無料で会員登録する<i className="ic ic-down"></i>
          </a>
        </div>
      </section>
      <section className="landing-section plus">
        <div className="container-lg">
          <span className="first-letter">+ PLUS MEMBER</span>
          <div className="girl">
            <Image
              height={50}
              width={50}
              src="/assets/front/Image/landing/girl01.svg"
              alt=""
            />
          </div>
          <h2>
            <span>プラス会員</span>になると、さらに便利に！
          </h2>
          <div className="d-flex flex-column flex-lg-row flex-wrap">
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/reserve.svg"
                    className="card-Image"
                    alt="予約公開"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>予約公開</h3>
                    <p className="card-text">
                      事前に日時を指定して、予約公開することができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/up.svg"
                    className="card-Image"
                    alt="販売価格の上限アップ"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>販売価格の上限アップ</h3>
                    <p className="card-text">
                      販売価格の上限が、1万円から10万円にアップします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/limited.svg"
                    className="card-Image"
                    alt="数量限定の販売"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>数量限定の販売</h3>
                    <p className="card-text">
                      「10部限定」など、数量限定の販売をすることができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/pdf-selfdownload.svg"
                    className="card-Image"
                    alt="自分の有料記事から自動でPDFを作成・ダウンロードが可能に"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>記事のPDFダウンロードが可能に</h3>
                    <p className="card-text">
                      自分が公開した記事のPDFダウンロードができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/effect.svg"
                    className="card-Image"
                    alt="自分の有料記事から自動でPDFを作成・ダウンロードが可能に"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>記事のエフェクト設定</h3>
                    <p className="card-text">
                      記事をスクロールすると文字や画像がフェードインするなど、動きを付けることができます。
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tips.tayori.com/q/tips-helpcenter/detail/183410"
                      >
                        サンプル
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/webfont.svg"
                    className="card-Image"
                    alt="自分の有料記事から自動でPDFを作成・ダウンロードが可能に"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>WEBフォントが利用可能</h3>
                    <p className="card-text">
                      記事で小杉丸ゴシック/油性マジック/ドットゴシックなどのWEBフォントを利用できます。
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tips.tayori.com/q/tips-helpcenter/detail/183409"
                      >
                        サンプル
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/fileupload.svg"
                    className="card-Image"
                    alt="ファイルアップロード上限アップ"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>ファイルサイズの上限がアップ</h3>
                    <p className="card-text">
                      アップロードできるファイルサイズが、1ファイルにつき100MBまでになります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <Image
                    height={50}
                    width={50}
                    src="/assets/front/Image/landing/copyguard.svg"
                    className="card-Image"
                    alt="コピーガード"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3>コピーガード</h3>
                    <p className="card-text">
                      投稿記事にコピーガードをかけて選択・コピーできないようにします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <a
              href="#"
              data-toggle="modal"
              data-target="#comparisonModal"
              className="btn btn-secondary btn-lg btn-block"
            >
              無料会員との違いを見る<i className="ic ic-plus"></i>
            </a>
            <a
              href="https://tips.jp/plus"
              className="btn btn-primary grd-primary btn-lg btn-pill btn-block"
            >
              プラス会員に申し込む<i className="ic ic-down"></i>
            </a>
          </div>
        </div>
        <section className="ban">
          <div className="container-lg">
            <h2>禁止事項</h2>
            <div className="bg-white p-4 pt-5 mt-0">
              <ul className="pl-4">
                <li>
                  違法性の疑いがある、もしくはモラルに著しく欠ける内容の掲載
                </li>
                <li>外部有料コンテンツへの誘導が目的の内容の掲載</li>
                <li>アダルトコンテンツの掲載</li>
                <li>
                  外部ASPを使ったアフィリエイトリンクの掲載
                  <div className="lh-1">
                    <small>
                      ※過去、外部ASPのアフィリエイトリンク掲載を許可していた期間中に、Tipsプラスを登録いただいたユーザー様については、現在も一部掲載可能としておりますが、それ以外の方については掲載禁止となっております。また再開の予定はございません。
                    </small>
                  </div>
                </li>
              </ul>
              <div className="pl-4 pr-4 mt-4">
                その他の禁止事項については、
                <a
                  href="https://tips.jp/u/tipsinfo/a/4woqmWNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  記事公開におけるガイドライン
                </a>
                や
                <a
                  href="https://tips.jp/u/tipsinfo/a/affiliate-guideline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  Tipsアフィリエイトガイドライン
                </a>
                、
                <a
                  href="https://tips.jp/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  利用規約
                </a>
                をご確認ください。
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="landing-section letstart">
  <div className="container-lg">
      <p>まずははじめてみよう</p>
      <p>無料会員登録ですぐに記事を書きはじめることができます。</p>
      <span className="illust mainvisual"><Image height={50} width={50} height={40} width={40} className="ovj ovj-contain" src="/assets/front/Image/landing/main_illustration.svg" alt="Tipsなら、無料ですぐに記事の販売をはじめることができます" /></span />
      <a href="https://tips.jp/register" className="btn btn-primary grd-primary btn-lg btn-pill btn-block">無料で会員登録する<i className="ic ic-down"></i></a>
  </div>
</section> */}
    </>
  );
}
