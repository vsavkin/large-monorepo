import { render } from '@testing-library/react';

import ImportantComponent111 from './important-component-111';

describe('ImportantComponent111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent111 />);
    expect(baseElement).toBeTruthy();
  });
});
