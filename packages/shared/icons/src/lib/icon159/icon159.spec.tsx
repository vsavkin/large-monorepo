import { render } from '@testing-library/react';

import Icon159 from './icon159';

describe('Icon159', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon159 />);
    expect(baseElement).toBeTruthy();
  });
});
