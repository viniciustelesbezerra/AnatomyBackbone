class TweetsController < ApplicationController
  
  before_filter :load_tweet, :only => %w(show update destroy)
  respond_to :json

  def index
    @tweets = Tweet.all

    respond_with @tweets
  end

  def show
    respond_with @Tweet
  end

  def update
    @tweet.update_attributes params[:tweet]

    respond_with @tweet
  end

  def create
    @tweet = Tweet.create params[:tweet]

    respond_with @tweet
  end

  def destroy
    @tweet.destroy

    respond_with @tweet
  end

  private

  def load_tweet
    @tweet = Tweet.find params[:id]
  end
end
