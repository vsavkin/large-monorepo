import { render } from '@testing-library/react';

import ImportantComponent166 from './important-component-166';

describe('ImportantComponent166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent166 />);
    expect(baseElement).toBeTruthy();
  });
});
