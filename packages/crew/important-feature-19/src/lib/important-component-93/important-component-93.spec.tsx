import { render } from '@testing-library/react';

import ImportantComponent93 from './important-component-93';

describe('ImportantComponent93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent93 />);
    expect(baseElement).toBeTruthy();
  });
});
