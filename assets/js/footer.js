const getFooter = document.getElementById('footer');
const footer = `
        <div class="parent-logo">
            <img src="../assets/media/logo/0101-01.svg" class="footer-logo" alt="">
        </div>
        <div class="footer">
            <div>
                <h3>
                    من نحن
                </h3>
                <p>
                    شركة مغربية مقرنا بدار البيضاء ونقدم خدامتنا في جميع أنحاء المملكة المغربية
                </p>
            </div>
            <div>
                <h3>
                    موقعنا
                </h3>
                <p>
                    3 IMM CHERARDA BOURGOGNE CASABLANCA
                </p>
            </div>
            <div>
                <h3>
                    فريقنا
                </h3>
                <p>
                    فريق محترف ومتكامل نهدف من خلاله إلى توفير خدمات ذات كفائة وجودة عالية لعملائنا
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
        </div>

        <div class="copywrite">
            <strong>جميع الحقوق محفوظة ل group7sr</strong>
        </div>
`;

(
    function () {
        getFooter.innerHTML = footer;
    }
)();