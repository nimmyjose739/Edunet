export default function FooterP() {
    return (
      <div>
        {/* Footer Section */}
        <footer className="bg-dark text-white py-4 mb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>&copy; 2024 Airbnb Clone. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="/terms" className="text-white me-3">Terms of Service</a>
                <a href="/privacy" className="text-white">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  