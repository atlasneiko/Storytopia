require 'test_helper'

class Api::SotriesrailsControllerTest < ActionDispatch::IntegrationTest
  test "should get ckl" do
    get api_sotriesrails_ckl_url
    assert_response :success
  end

end
