import { render } from '@testing-library/react';

import Alert166 from './alert166';

describe('Alert166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert166 />);
    expect(baseElement).toBeTruthy();
  });
});
