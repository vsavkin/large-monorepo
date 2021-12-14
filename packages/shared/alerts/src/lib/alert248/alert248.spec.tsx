import { render } from '@testing-library/react';

import Alert248 from './alert248';

describe('Alert248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert248 />);
    expect(baseElement).toBeTruthy();
  });
});
