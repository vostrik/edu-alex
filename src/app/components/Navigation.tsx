export const Navigation = () => {
  return (
    <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="navbar-header">
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                </button>
                <a href="#" className="navbar-brand">Решение задач </a>
          </div>
          <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-nav-first">
                    <li><a href="#top" className="smoothScroll">Назад</a></li>
                    <li><a href="#about" className="smoothScroll">О нас</a></li>
                    <li><a href="#team" className="smoothScroll">Наши специалисты</a></li>
                    <li><a href="#courses" className="smoothScroll"></a></li>
                    <li><a href="#testimonial" className="smoothScroll">Отзывы</a></li>
                    <li><a href="#contact" className="smoothScroll">Связаться с нами </a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><i className="fa fa-phone"></i> 79152065066</a></li>
                </ul>
          </div>

      </div>
    </section>
  )
}