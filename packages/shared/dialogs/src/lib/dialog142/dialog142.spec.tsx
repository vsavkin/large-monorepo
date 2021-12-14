import { render } from '@testing-library/react';

import Dialog142 from './dialog142';

describe('Dialog142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog142 />);
    expect(baseElement).toBeTruthy();
  });
});
