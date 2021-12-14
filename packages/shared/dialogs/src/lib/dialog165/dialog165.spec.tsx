import { render } from '@testing-library/react';

import Dialog165 from './dialog165';

describe('Dialog165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog165 />);
    expect(baseElement).toBeTruthy();
  });
});
