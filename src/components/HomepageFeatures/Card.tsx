import Link from "@docusaurus/Link";
import { ReactNode } from "react";

export default function Card({
  modName,
  modLink,
  modDescription,
  modLinkText,
}): ReactNode {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__header text--info">
          <h3>{modName}</h3>
        </div>
        <div className="card__body text--secondary">
          <p>{modDescription}</p>
        </div>
        <div className="card__footer">
          {/* <button className="button button--secondary button--block"> */}
          <Link
            className="button button--secondary button--lg padding-horiz--lg"
            to={modLink}
          >
            {modLinkText}
          </Link>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}
