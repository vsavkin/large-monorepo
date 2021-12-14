import { render } from '@testing-library/react';

import Icon243 from './icon243';

describe('Icon243', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon243 />);
    expect(baseElement).toBeTruthy();
  });
});
