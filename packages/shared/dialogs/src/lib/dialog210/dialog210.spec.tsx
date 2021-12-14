import { render } from '@testing-library/react';

import Dialog210 from './dialog210';

describe('Dialog210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog210 />);
    expect(baseElement).toBeTruthy();
  });
});
