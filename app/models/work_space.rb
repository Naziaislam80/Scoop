# == Schema Information
#
# Table name: work_spaces
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class WorkSpace < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    belongs_to :user
    has_many :channels
end
