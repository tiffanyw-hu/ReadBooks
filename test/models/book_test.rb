# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string
#  author      :string
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
