$$.widget({
  name: 'videochat',
  html: `
  <div>
   <div class="container">
      <div class="app">

        <div class="head clearfix">
          <span class="messages-notification">
            <i class="fab fa-rocketchat"></i>
            <span class="count">2</span>
          </span>
          <span class="title">CARA VIDEO CALL KIRIM LINK DI BROWSERMU KE TEMENMU (CHROME)</span>
          <span class="create-new">
            <i class="far fa-stop-circle"></i>
          </span>
        </div>

        <div class="body">

        <div class="footer">
          <ul>
            <li class="active">
	            <i class="fas fa-video"></i>
            </li>
            <li>
              <i class="fa fa-tags"></i>
            </li>
            <li>
              <i class="fa fa-heart"></i>
            </li>
            <li>
						<i class="far fa-clock"></i>
            </li>
            <li>
              <i class="fa fa-cog"></i>
            </li>
          </ul>
        </div>

      </div>
    </div>
	</div>
  `,
  style: `
  * {
  		margin: 0;
  		padding: 0;
  		outline: none;
  	}
  	.container {
  		width: 100%;
  		height: 100%;
  		display: inline-block;
  	}
  	div.app {
  		width: 100%;
  		height: 100%;
  		background: #5850c0;
  		&:before {
  			content: '';
  			position: absolute;
  			left: 0;
  			width: 100%;
  			height: 100px;
  			display: inline-block;
  			box-shadow: inset 0 80px 85px -35px #3c33b0;
  			z-index: 0;
  		}
  		&:after {
  			content: '';
  			position: absolute;
  			left: 0;
  			width: 100%;
  			height: 100px;
  			display: inline-block;
  			bottom: 0;
  			box-shadow: inset 0 -80px 85px -35px #3c33b0;
  			z-index: 0;
  		}
  		div.head {
  			z-index: 1;
  			position: relative;
  			display: block;
  			width: 100%;
  			height: 50px;
  			line-height: 48px;
  			text-align: center;
  			text-transform: uppercase;
  			letter-spacing: 2px;
  			color: rgba(255,255,255,0.7);
  			background: #271c5d;
  			border-bottom: 1px solid rgba(255,255,255,0.35);
  			box-shadow: inset 0 -15px 35px -5px rgba(0,0,0,0.3);
  		}
  	}
  	div.head {
  		span.title {
  			position: absolute;
  			width: 100%;
  			display: inline-block;
  			left: 0;
  			font-size: 16px;
  			font-weight: 500;
  			margin-top: 2px;
  			color: #fff;
  		}
  		span.messages-notification {
  			position: relative;
  			float: left;
  			font-size: 18px;
  			font-weight: normal;
  			margin-left: 30px;
  			color: #fff;
  			margin-top: 2px;
  			span.count {
  				position: absolute;
  				font-size: 10px;
  				width: 17px;
  				height: 17px;
  				display: inline-block;
  				background: #f42052;
  				line-height: 17px;
  				border-radius: 100%;
  				margin-top: -30px;
  			}
  		}
  		span.create-new {
  			float: right;
  			font-size: 17px;
  			font-weight: normal;
  			margin-right: 30px;
  			color: #fff;
  			margin-top: 2px;
  		}
  	}

  	div.footer {
  		position: absolute;
  		width: 100%;
  		bottom: 0;
  		z-index: 10;
  		background: #271c5d;
  		border-top: 1px solid rgba(255,255,255,0.35);
  		box-shadow: inset 0 15px 25px -5px rgba(0,0,0,0.3);
  		ul {
  			li {
  				list-style: none;
  				float: left;
  				width: 20%;
  				display: inline-block;
  				padding: 18px 0;
  				font-size: 18px;
  				text-align: center;
  				color: #8b86ed;
  			}
  			li.active {
  				color: #fff;
  				box-shadow: inset 0 -6px 0 rgba(139,134,237,0.8), inset 0 -25px 25px -10px rgba(139,134,237,0.2);
  			}
  		}
  	}
  `,
})
