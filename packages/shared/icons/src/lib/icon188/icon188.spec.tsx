import { render } from '@testing-library/react';

import Icon188 from './icon188';

describe('Icon188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon188 />);
    expect(baseElement).toBeTruthy();
  });
});
