class TweetsController < ApplicationController
  
  before_filter :load_tweet, :only => %w(show update destroy)
  respond_to :json

  def index
    @tweets = Tweet.all

    respond_with @tweets
  end

  def show
    respond_with @tweet
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

  # Generate
=begin  
  def new
    @tweet = Tweet.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @tweet }
    end
  end

  def create
    @tweet = Tweet.new(params[:tweet])

    respond_to do |format|
      if @tweet.save
        format.html { redirect_to @tweet, :notice => 'tweet was successfully created.' }
        format.json { render :json => @tweet, :status => :created, :location => @tweet }
      else
        format.html { render :action => "new" }
        format.json { render :json => @tweet.errors, :status => :unprocessable_entity }
      end
    end
  end
=end

  private

  def load_tweet
    @tweet = Tweet.find params[:id]
  end
end
