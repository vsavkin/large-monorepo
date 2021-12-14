import { render } from '@testing-library/react';

import ImportantComponent188 from './important-component-188';

describe('ImportantComponent188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent188 />);
    expect(baseElement).toBeTruthy();
  });
});
