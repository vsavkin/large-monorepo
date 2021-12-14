import { render } from '@testing-library/react';

import Icon245 from './icon245';

describe('Icon245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon245 />);
    expect(baseElement).toBeTruthy();
  });
});
