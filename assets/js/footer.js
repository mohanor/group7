const getFooter = document.getElementById('footer');
const footer = `
        <footer class="footer">
            <div>
                <h3>
                    من نحن
                </h3>
                <p>
                    مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل في مشاريع موسوعات حرة ودقيقة

                </p>
            </div>
            <div>
                <h3>
                    موقعنا
                </h3>
                <p>
                    مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل في مشاريع موسوعات حرة ودقيقة

                </p>
            </div>
            <div>
                <h3>
                    فريقنا
                </h3>
                <p>
                    مشروع تعاوني متعدد اللغات يضم ويكيات بأكثر من 300 لغة للعمل في مشاريع موسوعات حرة ودقيقة

                </p>
            </div>
            <div>
                <h3>تابعنا على</h3>
                <ul class="footer-list">
                    <li class="footer-item">
                        <a href="#" class="footer-link">
                            <img src="../assets/media/facebook.svg" alt="facebook">
                        </a>
                    </li>
                    <li class="footer-item">
                        <a href="#" class="footer-link">
                            <img src="../assets/media/whatsapp.svg" alt="whatsapp">
                        </a>
                    </li>
                    <li class="footer-item">
                        <a href="#" class="footer-link">
                            <img src="../assets/media/linkedin.svg" alt="linkedin">
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

        <div class="copywrite">
            <strong>جميع الحقوق محفوظة ل group7sr</strong>
        </div>
`;

(
    function () {
        getFooter.innerHTML = footer;
    }
)();