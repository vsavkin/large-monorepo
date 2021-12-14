import { render } from '@testing-library/react';

import Icon166 from './icon166';

describe('Icon166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon166 />);
    expect(baseElement).toBeTruthy();
  });
});
