class AddStatusToTweets < ActiveRecord::Migration
  def change
    add_column :tweets, :status, :integer

  end
end
