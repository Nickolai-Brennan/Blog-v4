'use client';

import { useState } from 'react';
import { mockLeagueRounds, mockVipMembers } from '@/lib/mock-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Trophy, Medal, Users, Target, CheckCircle } from 'lucide-react';

const sortedLeaderboard = [...mockLeagueRounds].sort((a, b) => b.points - a.points);

export default function VipLeaguePage() {
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [joinForm, setJoinForm] = useState({ name: '', email: '', handicap: '' });

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy size={18} className="text-amber-400" />;
    if (rank === 2) return <Medal size={18} className="text-gray-400" />;
    if (rank === 3) return <Medal size={18} className="text-amber-600" />;
    return <span className="text-gray-500 text-sm font-bold w-[18px] text-center">{rank}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader
        title="VIP League"
        subtitle="The Fairway's exclusive competition league for dedicated members"
      />

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: Users, label: 'Active Members', value: mockVipMembers.filter(m => m.active).length },
          { icon: Trophy, label: 'League Rounds', value: mockLeagueRounds.length },
          { icon: Target, label: 'Avg Score', value: Math.round(mockLeagueRounds.reduce((a, r) => a + r.score, 0) / mockLeagueRounds.length) },
          { icon: Medal, label: 'Season', value: '2024' },
        ].map(({ icon: Icon, label, value }) => (
          <Card key={label} shadow="sm">
            <CardContent className="flex items-center gap-3 py-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Icon size={18} className="text-green-700" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Leaderboard */}
        <div className="lg:col-span-2">
          <Card shadow="lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trophy className="text-amber-500" size={22} />
                <h2 className="font-bold text-gray-900 text-xl">Spring Classic Leaderboard</h2>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b">
                    <th className="px-6 py-3 text-left">Rank</th>
                    <th className="px-6 py-3 text-left">Player</th>
                    <th className="px-6 py-3 text-center">Score</th>
                    <th className="px-6 py-3 text-center">Points</th>
                    <th className="px-6 py-3 text-left hidden sm:table-cell">Course</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sortedLeaderboard.map((round, index) => (
                    <tr
                      key={round.id}
                      className={`transition-colors hover:bg-gray-50 ${index === 0 ? 'bg-amber-50' : ''}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center w-7">{getRankIcon(index + 1)}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {round.playerName.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">{round.playerName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-semibold ${round.score < 72 ? 'text-green-600' : round.score > 75 ? 'text-red-500' : 'text-gray-700'}`}>
                          {round.score}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-green-700">{round.points}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">{round.course}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Member Stats */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Member Roster</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockVipMembers.map(member => (
                <Card key={member.id} shadow="sm">
                  <CardContent className="flex items-center gap-4 py-3">
                    <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">{member.name}</div>
                      <div className="text-xs text-gray-500">
                        HCP: {member.handicap ?? 'N/A'} · Joined {new Date(member.joinedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${member.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {member.active ? 'Active' : 'Inactive'}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Join Form */}
        <div>
          {joinSubmitted ? (
            <Card shadow="lg" className="text-center">
              <CardContent className="py-12">
                <CheckCircle size={56} className="mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 text-sm">We&apos;ll review your application and get back to you within 5 business days.</p>
              </CardContent>
            </Card>
          ) : (
            <Card shadow="lg" className="sticky top-24">
              <CardHeader className="bg-green-900 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Trophy className="text-amber-400" size={20} />
                  <h3 className="font-bold text-lg">Join the VIP League</h3>
                </div>
                <p className="text-green-300 text-sm mt-1">Exclusive competitions, handicap tracking, and more.</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {['Monthly competition rounds', 'Official handicap tracking', 'Course access discounts', 'Member-only events', 'The Fairway VIP newsletter'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <form onSubmit={handleJoin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input required type="text" value={joinForm.name} onChange={e => setJoinForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input required type="email" value={joinForm.email} onChange={e => setJoinForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Handicap</label>
                    <input type="number" step="0.1" min="0" max="54" value={joinForm.handicap} onChange={e => setJoinForm(f => ({ ...f, handicap: e.target.value }))} placeholder="e.g. 12.5" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <Button type="submit" className="w-full">Apply for Membership</Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
