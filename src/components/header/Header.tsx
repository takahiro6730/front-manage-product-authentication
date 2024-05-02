import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["top-bar"]}>
        <div className={styles["container-lg"]}>
          <div className={styles["header__logo"]}>
            <Link className="navbar-brand" href="https://tips.jp" title="Tips">
              <div>LOGO</div>
            </Link>
          </div>
          <div className={styles["user-bar"]}>
            <div id="menu-mainmenu" className={styles["user-bar-ul"]}>
              <div className={styles["user-bar-search"]}>
                <div className={styles["search-input-group"]}>
                  <input
                    type="text"
                    className={styles["search-input-field"]}
                    name="keyword"
                    value=""
                    placeholder="すべてのカテゴリから探す"
                  />
                </div>
              </div>
              <div className={styles["user-icons"]}>
                <Link
                  className={styles["user-login"]}
                  href="/login"
                  title="Tips"
                >
                  <div>ログイン</div>
                </Link>
                <Link
                  className={styles["user-register"]}
                  href="https://tips.jp/register"
                  title="Tips"
                >
                  <div>新規登録</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["link-group"]}>
               <div className={styles["link-bar"]}>
          <Link
            className={styles["link-items"]}
            href="https://tips.jp"
            title="Tips"
          >
            <div>ホーム</div>
          </Link>
          <Link
            className={styles["link-items"]}
            href="https://tips.jp/category"
            title="Tips"
          >
            <div>カテゴリ</div>
          </Link>
          <Link
            className={styles["link-items"]}
            href="https://tips.jp/tags"
            title="Tips"
          >
            <div>タグ一覧</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
