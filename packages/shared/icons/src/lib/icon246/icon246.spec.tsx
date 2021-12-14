import { render } from '@testing-library/react';

import Icon246 from './icon246';

describe('Icon246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon246 />);
    expect(baseElement).toBeTruthy();
  });
});
