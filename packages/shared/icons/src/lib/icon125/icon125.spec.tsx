import { render } from '@testing-library/react';

import Icon125 from './icon125';

describe('Icon125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon125 />);
    expect(baseElement).toBeTruthy();
  });
});
