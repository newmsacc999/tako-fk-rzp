import React, { useMemo } from "react";

export default function FakeVercel404() {
  // Generate random deployment ID
  const deploymentId = useMemo(() => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

    const randomString = (length) => {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      }
      return result;
    };

    const randomNumber = Math.floor(
      1000000000000 + Math.random() * 9000000000000
    );

    return `bom1::dzvf7-${randomNumber}-${randomString(16)}`;
  }, []);

  return (
    <>
      <div className="page">
        <div className="wrapper">
          {/* Main Error Card */}
          <div className="card">
            <h1>
              <span className="bold">404:</span> NOT_FOUND
            </h1>

            <div className="row">
              <span className="label">Code:</span>{" "}
              <code>`DEPLOYMENT_NOT_FOUND`</code>
            </div>

            <div className="row">
              <span className="label">ID:</span>{" "}
              <code>`{deploymentId}`</code>
            </div>
          </div>

          {/* Bottom Notice */}
          <div className="notice">
            This deployment cannot be found. For more information and
            troubleshooting, see our documentation.
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f6f6;
        }

        #__next {
          height: 100%;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: #f6f6f6;
          padding-top: 55px;
        }

        .wrapper {
          width: 840px;
          max-width: 92%;
        }

        /* TOP CARD */
        .card {
          background: #fff;
          border: 1px solid #dddddd;
          border-radius: 6px;
          padding: 32px 28px;
        }

        .card h1 {
          font-size: 20px;
          font-weight: 400;
          color: #000;
          margin-bottom: 34px;
          letter-spacing: -0.2px;
        }

        .bold {
          font-weight: 700;
        }

        .row {
          font-size: 18px;
          color: #111;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .row:last-child {
          margin-bottom: 0;
        }

        .label {
          margin-right: 8px;
        }

        code {
          font-family: monospace;
          font-size: 17px;
          color: #000;
          background: transparent;
        }

        /* BLUE INFO BOX */
        .notice {
          margin-top: 40px;
          border: 1px solid #0070f3;
          border-radius: 6px;
          background: #fff;
          color: #0070f3;
          text-align: center;
          padding: 20px 26px;
          font-size: 16px;
          line-height: 1.5;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .page {
            padding-top: 30px;
          }

          .card {
            padding: 24px 20px;
          }

          .card h1 {
            font-size: 18px;
          }

          .row {
            font-size: 16px;
          }

          code {
            font-size: 15px;
            word-break: break-word;
          }

          .notice {
            font-size: 14px;
            padding: 18px;
          }
        }
      `}</style>
    </>
  );
}
