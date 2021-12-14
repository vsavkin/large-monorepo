import { render } from '@testing-library/react';

import ImportantComponent144 from './important-component-144';

describe('ImportantComponent144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent144 />);
    expect(baseElement).toBeTruthy();
  });
});
